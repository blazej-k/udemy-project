import * as React from 'react';
import { FC } from 'react';
import { Modal, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";

export interface NewCourseModalProps {
    visiblity: boolean,
    toogleModal: (prev: boolean) => void,
    handleInput: (e: FormEvent<HTMLInputElement>) => void,
    name: string
}
 
const NewCourseModal: FC<NewCourseModalProps> = ({visiblity, name, toogleModal, handleInput}) => {
    return (
        <Modal show={visiblity} animation={false} onHide={toogleModal}>
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
                    <input type='text' name='author' required value={name} onChange={handleInput} />
                </label>
                <label>
                    Description:
                    <input type='text' name='description' required value={name} onChange={handleInput} />
                </label>
                <label>
                    Price:
                    <input type='number' name='price' required value={name} onChange={handleInput} />
                </label>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">ADD!</Button>
            </Modal.Footer>

        </Modal>
    );
}
 
export default NewCourseModal;