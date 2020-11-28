import * as React from 'react';
import { FC, FormEvent } from 'react';
import { Modal, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";

export interface NewCourseModalProps {
    visiblity: boolean,
    toogleModal: (prev: boolean) => void,
    handleInput: (e: FormEvent<HTMLInputElement>) => void,
    values: {
        name: string,
        author: string,
        description: string,
        price: number,
        warning: string
    },
    add: () => void 
}
 
const NewCourseModal: FC<NewCourseModalProps> = ({visiblity, values, toogleModal, handleInput, add}) => {

    const {name, author, description, price, warning} = values

    return (
        <Modal show={visiblity} animation={false} onHide={() => toogleModal(visiblity)}> 
             <Modal.Header closeButton={true}>
                <Modal.Title>Create new course</Modal.Title> 
            </Modal.Header>
            <Modal.Body>
                <label>
                    Name:
                    <input type='text' name='name' required value={name} onChange={handleInput} />
                </label>
                <label>
                    Author:
                    <input type='text' name='author' required value={author} onChange={handleInput} />
                </label>
                <label>
                    Price:
                    <input type='number' name='price' required value={price} onChange={handleInput} />
                </label> 
                <label>
                    Description:
                    <input type='text' name='description' required value={description} onChange={handleInput} />
                </label>
                <div className='Modal-invalidFormValidate'>
                    {warning.length ? warning : null}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={add}>ADD!</Button>
            </Modal.Footer>

        </Modal>
    );
}
 
export default NewCourseModal;