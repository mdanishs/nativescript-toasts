/*
2016 : Laurent Bernabé
*/

export class DURATION {
    static SHORT:string;
    static LONG:string;
}

export interface ToastOptions {
    text: string;
    duration: DURATION;
}

export function show(toastObject: ToastOptions)
