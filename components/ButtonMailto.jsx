'use client'
// Source - https://stackoverflow.com/a/63819003
// Posted by CodingYourLife, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-19, License - CC BY-SA 4.0

import React from "react";
import Link from "next/link";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            href=''
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;
