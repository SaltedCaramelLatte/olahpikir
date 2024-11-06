import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { MenuItemType } from '../home/menuList/menuData';
import { Input, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";

interface EditMenuItemProps {
    item: MenuItemType;
    onSave: (id: string, updatedItem: Partial<MenuItemType>) => void;
    onCancel: () => void;
    uploadImageAndGetUrl: (file: File) => Promise<string | null>;
}

const EditMenuItem = ({ item, onSave, onCancel, uploadImageAndGetUrl }: EditMenuItemProps) => {
    const [title, setTitle] = useState(item.title);
    const [img, setImg] = useState(item.img); // State untuk menyimpan URL gambar
    const [price, setPrice] = useState(item.price);
    const [description, setDescription] = useState(item.description);
    const [status, setStatus] = useState(item.status);

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            const url = await uploadImageAndGetUrl(file);
            if (url) {
                setImg(url); // Update URL gambar baru setelah di-upload
            }
        }
    }, [uploadImageAndGetUrl]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.gif'] },
    });

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
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4">
                            <Input
                                label="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                placeholder="Enter title"
                            />
                            <div {...getRootProps()} className="dropzone border p-4 text-center">
                                <input {...getInputProps()} />
                                {isDragActive ? (
                                    <p>Drop the files here...</p>
                                ) : (
                                    <p>Drag & drop an image here, or click to select one</p>
                                )}
                            </div>
                            {img && <img src={img} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
                            <Input
                                label="Price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                                type="number"
                                placeholder="Enter price"
                            />
                            <Input
                                label="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                placeholder="Enter description"
                            />
                            <Input
                                label="Status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                placeholder="Enter status"
                            />
                        </div>
                        <ModalFooter>
                            <Button color="primary" type="submit">
                                Save Changes
                            </Button>
                            <Button color="danger" variant="light" onClick={onCancel}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default EditMenuItem;
