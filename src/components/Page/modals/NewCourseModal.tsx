import * as React from 'react';
import { ChangeEvent, FC, FormEvent } from 'react';
import { Modal, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";

export interface NewCourseModalProps {
    visiblity: boolean,
    toogleModal: (prev: boolean) => void,
    handleInput: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    values: {
        name: string,
        author: string,
        description: string,
        price: number,
        warning: string
    },
    handleImgInput: (e: ChangeEvent<HTMLInputElement>) => void,
    add: (e: FormEvent<HTMLFormElement>) => void
}

const NewCourseModal: FC<NewCourseModalProps> = ({ visiblity, values, toogleModal, handleInput, add, handleImgInput }) => {

    const { name, author, description, price, warning } = values

    return (
        <Modal show={visiblity} animation={false} onHide={() => toogleModal(visiblity)} data-aos="fade-up">
            <Modal.Header closeButton={true}>
                <Modal.Title>Create new course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form encType="multipart/form-data" onSubmit={add}>
                    <label>
                        Name:
                    <input type='text' name='name' required value={name} onChange={handleInput} />
                    </label><br />
                    <label>
                        Author:
                    <input type='text' name='author' required value={author} onChange={handleInput} />
                    </label><br />
                    <label>
                        Price:
                    <input type='number' name='price' required value={price} onChange={handleInput} />
                    </label> <br />
                    <input type='file' accept='.jpg, .png' name='img' required onChange={handleImgInput} />
                    <textarea onChange={handleInput} name='description' value={description} rows={5} placeholder="description to your course" style={{ 'resize': 'none', 'width': '100%' }}></textarea>
                    <span>Długość: {description.length}</span>
                    <input type='submit' value='ADD!'/>               
                </form>
                <div className='Modal-invalidFormValidate'>
                    {warning.length ? warning : null}
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="primary" onClick={add}>ADD!</Button>
            </Modal.Footer> */}

        </Modal>
    );
}

export default NewCourseModal;