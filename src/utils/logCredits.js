import { primary } from "../components/theme/Themes";

export const logCredits = () => {
    const pieceEmoji = String.fromCodePoint(0x270c);

    const logStyle = [
        `color: ${primary}`,
        "font-size: 2em",
        "font-weight: 300",
        "padding: 80px 0px 80px 0px",
    ].join(";");

    return console.log(
        `%c © ${new Date().getFullYear()} github.com/adityanrlhmd ${pieceEmoji}`,
        logStyle
    );
};
