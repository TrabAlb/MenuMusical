export type DesignType = {
    text: TextType;
    video?: string
}

export type TextType = {
    title: string;
    redirectLink?: string;
    doRedirect: boolean;
    form: boolean;
    subtitles: Array<TextType>;
    icon?: string;
}