import * as React from 'react';
import styled from "styled-components";

interface PropsType {
    className?: string;
    onClick?: () => void;
}

const SvgElement = styled('svg') <PropsType>`
    height: auto;
`;

/** 
 * @deprecated 
 * @use src/universes/star/assets/new-icons/CasinoIcon 
 * */
export const ScrollIcon = ({ className, onClick }: PropsType): JSX.Element => {
    return (
        <SvgElement fill='#fff' onClick={onClick} className={className} xmlns='http://www.w3.org/2000/svg' width={56} height={56} viewBox='0 0 56 56'>
            {/* @ts-ignore */}
            <g transform="translate(128 128) scale(0.72 0.72)" style="">
                {/* @ts-ignore */}

                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)" >
                    {/* @ts-ignore */}

                    <polygon points="0,38.92 2.83,36.08 45,78.25 87.17,36.08 90,38.92 45,83.92 " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) " />
                    {/* @ts-ignore */}

                    <polygon points="0,8.92 2.83,6.08 45,48.25 87.17,6.08 90,8.92 45,53.92 " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) " />
                </g>
            </g>
        </SvgElement>
    );
};
