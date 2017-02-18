/*
2016 : Laurent Bernabé
*/

export class DURATION {
    static SHORT:string;
    static LONG:string;
}

export class POSITION {
    static TOP:string;
    static CENTER:string;
    static BOTTOM:string;
}

export interface ToastOptions {
    text: string;
    duration: DURATION;
    position?: POSITION
}

export function show(toastObject: ToastOptions)
