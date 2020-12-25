import * as React from 'react';
import { ChangeEvent, FC, FormEvent } from 'react';
import { Button, Modal } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import '../../../style/Modal.scss'
import Loader from 'react-loader-spinner'

export interface NewCourseModalProps {
    visiblity: boolean,
    toogleModal: (prev: boolean) => void,
    handleInput: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    values: {
        name: string,
        author: string,
        description: string,
        price: number | undefined,
        warning: string,
        showLoader: boolean
    },
    handleImgInput: (e: ChangeEvent<HTMLInputElement>) => void,
    add: (e: FormEvent<HTMLFormElement>) => void
}

const NewCourseModal: FC<NewCourseModalProps> = ({ visiblity, values, toogleModal, handleInput, add, handleImgInput }) => {

    const { name, author, description, price, warning, showLoader } = values

    return (
        <Modal show={visiblity} animation={false} onHide={() => toogleModal(visiblity)} data-aos="fade-up">
            <Modal.Header closeButton={true}>
                <Modal.Title>Create new course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form encType="multipart/form-data" onSubmit={add} id='modal'>
                    <label>
                        Name:
                    <input type='text' name='name' value={name} onChange={handleInput} placeholder='Course name' />
                    </label><br />
                    <label>
                        Author:
                    <input type='text' name='author' value={author} onChange={handleInput} placeholder='Course author' />
                    </label><br />
                    <label>
                        Price:
                    <input type='number' name='price' value={price} onChange={handleInput} />
                    </label> <br />
                    <input type='file' accept='.jpg, .png' name='img' onChange={handleImgInput} />
                    <textarea
                        onChange={handleInput}
                        name='description'
                        value={description}
                        rows={5} placeholder="Description to your course"
                    ></textarea>
                    <span>Length: {description.length}</span><br />
                    <div className='Modal-invalidFormValidate'>
                        {warning.length > 0 ? warning : null}
                    </div>
                    {!warning && showLoader && <div className="loader"><Loader
                        type="Oval"
                        color='#fb2c48'
                        height={70}
                        width={70} />
                    </div>}
                    <Button variant="primary" type='submit'>ADD!</Button>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default NewCourseModal;