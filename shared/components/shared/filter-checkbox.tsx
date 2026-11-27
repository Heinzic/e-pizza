import React from 'react';
import { Checkbox } from '../ui/checkbox';

export interface FilterChecboxProps {
    text: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
    name?: string;
}

export const FilterCheckbox = ({
    text,
    value,
    endAdornment,
    onCheckedChange,
    checked,
    name,
}: FilterChecboxProps) => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className="rounded-lg w-6 h-6"
                id={`checkbox-${name}-${value}`}
            />
            <label
                htmlFor={`checkbox-${name}-${value}`}
                className="leading-none cursor-pointer flex-1 select-none">
                {text}
            </label>
            {endAdornment}
        </div>
    );
};