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
      <DialogContent className='w-[327px] h-[407px] lg:w-[480] lg:h-[348]'>
        <DialogHeader>
       <div className='flex justify-center items-center mt-5 flex-col  gap-5'>
       <img className='w-[73px] h-[73px] lg:w-[93px] lg:h-[93px]' src="/delete.png" alt="" />
          <DialogTitle>Delete Transaction</DialogTitle>
          <DialogDescription>
        Are you sure you want to delete this transaction history
          </DialogDescription>
       </div>
        </DialogHeader>
        
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <div>
            <Button className='cursor-pointer' type="button" variant="secondary">
              Cancel
            </Button>
            <Button className='cursor-pointer' type="button" variant="secondary">
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
