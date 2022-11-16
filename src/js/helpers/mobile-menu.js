// eslint-disable-next-line import/no-extraneous-dependencies
import Mmenu from "mmenu-js";

document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu( "#menu", {
            "offCanvas": {
                "position": "right"
            },
            "theme": "white",
            "navbars": [
                {
                    "position": "top",
                    "content": [
                    ]
                }
            ]
        });
    }
);