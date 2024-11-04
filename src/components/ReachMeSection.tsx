// src/components/ReachMeSection.tsx
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { FaUser, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const ReachMeSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <button
                onClick={handleOpen}
                className="fixed bottom-4 right-4 flex items-center gap-2 bg-light-primary dark:bg-dark-primary text-white rounded-full py-2 px-6 shadow-lg hover:bg-light-accent dark:hover:bg-dark-accent transition z-50 hover:scale-105 transform"
            >
                <FaUser size={24} />
                <span className="font-semibold">Who Made This?</span>
            </button>

            <Modal
                isOpen={isOpen}
                onClose={handleClose}
                size="sm"
                radius="lg"
                shadow="md"
                backdrop="blur"
                placement="center"
                isDismissable={true}
            >
                <ModalContent className="max-w-xs bg-light-background dark:bg-dark-background rounded-lg">
                    <ModalHeader className="flex flex-col items-center gap-1 text-light-text dark:text-dark-text">
                        Connect with Me
                    </ModalHeader>
                    <ModalBody className="flex flex-col items-center space-y-4">
                        <p className="text-center text-light-text dark:text-dark-text">
                            Contact me through the following platforms:
                        </p>
                        <div className="flex space-x-6 justify-center">
                            <a href="https://linkedin.com/in/rahmat-079209247" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-light-secondary dark:text-dark-secondary text-4xl hover:text-light-primary dark:hover:text-dark-primary" />
                            </a>
                            <a href="https://wa.me/082190303750" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="text-green-500 text-4xl hover:text-green-700" />
                            </a>
                            <a href="https://github.com/RahmatRafiq" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-gray-700 dark:text-dark-text text-4xl hover:text-black dark:hover:text-light-text" />
                            </a>
                        </div>
                        <p className="text-center text-light-text dark:text-dark-text">
                            GitHub: <a href="https://github.com/RahmatRafiq" className="text-light-primary dark:text-dark-primary underline" target="_blank" rel="noopener noreferrer">RahmatRafiq</a>
                        </p>
                    </ModalBody>
                    <ModalFooter className="text-light-primary dark:text-white flex justify-center">
                        <Button color="danger" variant="light" onPress={handleClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ReachMeSection;
