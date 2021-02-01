//utilizado para retirar o reload na hora de clicar no link do quiz da galera
import React from 'react';
import NextLink from 'next/link';

export default function Link({children, href, ...props}) {
    return (
        <NextLink href = {href} passHref>
            <a {...props}>
                {children}
            </a>
        </NextLink>
    );
}