import { useState } from 'react';
import { DropdownWrapper, Button, DropdownContent, DropdownOption } from "./Dropdown.styled"


const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("classificação padrão");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const select_Option = (item) => {
        setSelectedOption(item);
        toggleDropdown()
    }

    return (
        <DropdownWrapper>
            <Button onClick={toggleDropdown}>{selectedOption}</Button>
            <DropdownContent isOpen={isOpen}>
                {options.map((item, index) => (
                    <DropdownOption key={index} onClick={() => { select_Option(item) }}>{item}</DropdownOption>
                ))}
            </DropdownContent>
        </DropdownWrapper>
    );
}

export default Dropdown;
