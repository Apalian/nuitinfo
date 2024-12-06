import { useEffect } from "react";

const RedirectToCaptcha = () => {
    useEffect(() => {
        window.location.href = "/captcha/captcha.html";
    }, []);

    return null; // Aucun contenu n'est affiché ici
};

export default RedirectToCaptcha;
