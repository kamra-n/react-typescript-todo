import { useState, useRef, FormEvent } from 'react';
import { Modal, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';



export default function TodoHeader({ add, data }: { add: (a: string) => void, data: string[] }) {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const todoInp = useRef<HTMLInputElement>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };


  // add Handler
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (todoInp.current!.input.value === ' ' || todoInp.current!.input.value < 2) {
      alert('please add something')
    }
    else {
      add(todoInp.current!.input.value);
      todoInp.current!.input.value = '';
      setIsModalOpen(false);
    }
  }

  return (
    <>
      <div className='flex p-4 justify-around items-center'>
        <div>
          <h1 className='text-xl md:text-3xl text-[#636368] font-semibold'>Wednesday, 22 Nov</h1>
        </div>
        <div className='pl-6 md:pl-24'>

          <button onClick={showModal} className='bg-[#5c76e4] text-white h-14 w-14 rounded-full flex justify-center items-center'>
            <PlusOutlined />
          </button>
          <form onSubmit={submitHandler}>
            <Modal title="Add todo" open={isModalOpen} onCancel={handleCancel} footer={null}>
              <Input placeholder="Enter Something" id='my-input' ref={todoInp} />
              <div className='flex justify-end'>
                <Button className='mt-3 bg-[#5c76e4] text-white' onClick={submitHandler}>Add Todo</Button>
              </div>
            </Modal>
          </form>
        </div>
      </div>
      <h2 className='text-[#5b75e3] font-semibold text-xl pl-3 md:pl-0'>{`${data?.length} Tasks`}</h2>
    </>
  )
}
