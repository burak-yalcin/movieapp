import React from "react";

export const modal = {
	isOpen: false,
	setIsOpen: () => {},
	isHeaderOpen: false,
	setIsHeaderOpen: () => {},
};

const ModalContext = React.createContext(modal);

export default ModalContext;
