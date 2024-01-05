/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

export default function ListItem({ title, description, id }: { title: string,  description: string, id: string  }) {
    
    function handleClick(event: MouseEvent<HTMLInputElement, MouseEvent>): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="list-item" key={id}>
            <input type="checkbox" onClick={handleClick} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}