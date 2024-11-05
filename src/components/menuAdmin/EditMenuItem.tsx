import { useState } from 'react';
import { MenuItemType } from '../home/menuList/menuData';
import { Input, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";

interface EditMenuItemProps {
    item: MenuItemType;
    onSave: (id: string, updatedItem: Partial<MenuItemType>) => void;
    onCancel: () => void;
}

const EditMenuItem = ({ item, onSave, onCancel }: EditMenuItemProps) => {
    const [title, setTitle] = useState(item.title);
    const [img, setImg] = useState(item.img);
    const [price, setPrice] = useState(item.price);
    const [description, setDescription] = useState(item.description);
    const [status, setStatus] = useState(item.status);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (item.id) {
            onSave(item.id, { title, img, price, description, status });
        } else {
            console.error("No ID found for item");
        }
    };

    return (
        <Modal
            size='lg'
            isOpen
            onClose={onCancel}
            placement="center"
        >
            <ModalContent className="bg-light-background dark:bg-dark-background rounded-lg">
                <ModalHeader>
                    <h2 className="text-light-primary dark:text-dark-primary">Edit Menu Item</h2>
                </ModalHeader>
                <ModalBody>
                    <div className="flex flex-row gap-4 flex-wrap">
                        <Input
                            label="Enter title"
                            fullWidth={true}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            labelPlacement="outside"
                            placeholder="Enter title"
                            className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text flex-grow"
                        />
                        <Input
                            label="Enter image URL"
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                            required
                            labelPlacement="outside"
                            placeholder="Enter image URL"
                            className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text flex-grow"
                        />
                        <Input
                            label="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            type="number"
                            labelPlacement="outside"
                            placeholder="0.00"
                            className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text flex-grow"
                        />
                        <Input
                            label="Enter description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            labelPlacement="outside"
                            placeholder="Enter description"
                            className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text flex-grow"
                        />
                        <Input
                            label="Enter status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            labelPlacement="outside"
                            placeholder="Enter status"
                            className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text flex-grow"
                        />
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                    <Button color="danger" variant="light" onPress={onCancel}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default EditMenuItem;
