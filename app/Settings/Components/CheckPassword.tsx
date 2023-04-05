'use client'

type Props = {
    sureFunction: ()=>void,
    cancelPressed: ()=>void
}

const CheckPassword = ({sureFunction, cancelPressed}: Props) => {
    const handleSubmit = (e: any) => {
        e.preventDefault()
        sureFunction()
    }
    return (
        <>
            <form className='flex flex-col' onSubmit={(e) => handleSubmit(e)}>
                <label>Enter Password</label>
                <input type={'password'} className={'bg-transparent border border-white'}/>
                <div className="flex">
                    <button type="button" onClick={() => cancelPressed()} className='py-1 px-4 text-xl bg-[#424242] w-fit mx-auto rounded-lg mt-2'>Cancel</button>
                    <button type="submit" className='py-1 px-4 text-xl bg-[#B23928] w-fit mx-auto rounded-lg mt-2'>Delete</button>
                </div>
            </form>
            <button className='mt-4'>Forgot password?</button>
        </>
    )
}

export default CheckPassword