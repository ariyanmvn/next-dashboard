import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React from 'react'

interface DeleteModalProps {
  deleteModalOpen: boolean;
  setDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ deleteModalOpen, setDeleteModalOpen }) => {
  return (
    <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <style>
        {`
          [data-state="open"] > button.absolute {
            display:none
          }
        `}
      </style>
      <DialogContent className='w-[327px] h-[403px] lg:w-[480px] lg:h-[348px]'>
        <DialogHeader>
       <div className='flex justify-center items-center  flex-col  gap-[32px]'>
        <img className='w-[73px] h-[73px] lg:w-[93px] lg:h-[93px]' src="/delete.png" alt="" />
          <DialogTitle className='text-[24px] lg:text-[32px]'>Delete Transaction?</DialogTitle>
          <DialogDescription>
        Are you sure you want to delete this transaction history
          </DialogDescription>
       </div>
        </DialogHeader>
        
        <DialogFooter>
          <DialogClose asChild>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-[16px] lg:gap-[24px]'>
            <Button className='cursor-pointer w-[248px] lg:w-[196px] h-[48px] hover:bg-white text-black font-semibold bg-white border-1 border-[#ACB5BB]' type="button" variant="secondary">
              Cancel
            </Button>
            <Button className='cursor-pointer w-[248px] lg:w-[196px] h-[48px] font-semibold  text-white hover:bg-[#31B099] bg-[#31B099]' type="button" variant="secondary">
              Yes
            </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteModal
