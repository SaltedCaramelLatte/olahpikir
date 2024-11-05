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
        <Modal isOpen onClose={onCancel} backdrop="blur" placement="center">
            <ModalContent className="bg-light-background dark:bg-dark-background rounded-lg">
                <ModalHeader>
                    <h2 className="text-light-primary dark:text-dark-primary">Edit Menu Item</h2>
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <Input
                            label="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            fullWidth
                            required
                            className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text"
                        />
                        <Input
                            label="Image URL"
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                            fullWidth
                            required
                            className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text"
                        />
                        <Input
                            label="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            fullWidth
                            required
                            className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text"
                        />
                        <Input
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            fullWidth
                            required
                            className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text"
                        />
                        <Input
                            label="Status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            fullWidth
                            className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text"
                        />
                    </form>
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
