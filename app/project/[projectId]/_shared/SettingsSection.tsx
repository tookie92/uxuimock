"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { THEME_NAME_LIST, THEMES } from '@/data/Themes'
import { Camera, Share, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

function SettingsSection() {

    const [selectedTheme,setSelectedTheme] = useState("AURORA_INK")
    const [projectName, setProjectName] = useState("")
    const [userNewScreenInput, setUserNewScreenInput] = useState<string>("")
  return (
    <div className='w-[300px] h-[90vh] p-5 border-r'>
       
            <h2 className='text-lg font-medium'>Settings</h2>

            <div className="mt-3">
                <h2 className='text-sm mb-1'>Project Name</h2>
                <Input  placeholder='Project Name' onChange={(event)=>setProjectName(event.target.value)} />
            </div>

            <div className="mt-5">
                <h2 className='text-sm mb-1'>Generate New Screen</h2>
                <Textarea  placeholder='Enter Prompt to generate using Ai' onChange={(event)=>setUserNewScreenInput(event.target.value)}/>
                <Button size={'sm'} className='mt-2 w-full'>
                    <Sparkles/>Generate with Ai
                </Button>
            </div>
            <div className="mt-5">
                <h2 className='text-sm mb-1'>Themes</h2>
                <div className='h-[200px] overflow-auto'>
                    <div className='flex flex-col gap-2'>
                        {THEME_NAME_LIST.map((theme,index)=>(
                            <div key={index} className={`p-3 border rounded-2xl ${theme === selectedTheme && "border-primary bg-primary/20"}` } onClick={()=>setSelectedTheme(theme)}>
                                <h2>{theme}</h2>
                                <div className='flex gap-2'>
                                    <div className='h-4 w-4 rounded-full' style={{backgroundColor:THEMES[theme].primary}} />
                                    <div className='h-4 w-4 rounded-full' style={{backgroundColor:THEMES[theme].secondary}} />
                                    <div className='h-4 w-4 rounded-full' style={{backgroundColor:THEMES[theme].accent}} />
                                    <div className='h-4 w-4 rounded-full' style={{backgroundColor:THEMES[theme].background}} />
                                    <div className="h-4 w-4 rounded-full" style={{background:`linear-gradient(135deg,${THEMES[theme].primary},${THEMES[theme].background},${THEMES[theme].primary},${THEMES[theme].accent})`}}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-5"></div>
            <div className="mt-5">
                <h2 className='text-sm mb-1'>Extras</h2>
                <div className="flex gap-3">
                    <Button size={'sm'} variant={'outline'} className='mt-2'>
                        <Camera/>Screenshot
                    </Button>
                    <Button size={'sm'} variant={'outline'} className='mt-2'>
                        <Share/>Share
                    </Button>
                </div>
            </div>

    </div>
  )
}

export default SettingsSection