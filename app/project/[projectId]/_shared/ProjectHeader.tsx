import { Button } from '@/components/ui/button'
import { Save } from 'lucide-react'
import React from 'react'

function ProjectHeader() {
  return (
   <div className='flex justify-between p-4 shadow-sm items-center'>
        <div>
            <h2 className='text-xl font-semibold'><span className='text-primary'>UXUI</span> Mock</h2>
        </div>
       <Button><Save/>Save</Button>
       
            
        
    </div>
  )
}

export default ProjectHeader