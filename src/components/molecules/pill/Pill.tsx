import React from 'react'

interface pillProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    icon: string; // sätt som en enum som ovan. Eller iterera över en förfylld lista
    label: string;
    onClick?: () => void;
}

const Pill = () => {
    return (
        <div>
            Pillepill
        </div>
    );
}
export default Pill;

