import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'

const FilesResubmitModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant='outline'
                    size='sm'
                    className='uppercase  text-white px-[30px] text-[10px] bg-primary  hover:bg-primary/80 rounded-[9px] font-bold'
                >
                    Resubmit the  files
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-md'>
                <DialogHeader>
                    <DialogTitle className='text-center'>Hello</DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default FilesResubmitModal
