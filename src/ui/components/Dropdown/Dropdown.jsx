import { useState, useRef, useEffect } from 'react';
import { DropdownWrapper, Button, DropdownContent, DropdownOption } from "./Dropdown.styled";

const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("classificação padrão");
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (item) => {
        setSelectedOption(item);
        setIsOpen(false);
    };

    return (
        <DropdownWrapper ref={dropdownRef}>
            <Button onClick={toggleDropdown}>{selectedOption}</Button>
            <DropdownContent isOpen={isOpen}>
                {options.map((item, index) => (
                    <DropdownOption key={index} onClick={() => selectOption(item)}>{item}</DropdownOption>
                ))}
            </DropdownContent>
        </DropdownWrapper>
    );
};

export default Dropdown;
