"use client";

import {useEffect, useRef} from "react";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
    url: string;
    open: boolean;
    onClose: () => void;
    title?: string;
}

export function ProjectModal({url, open, onClose, title}: ProjectModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (open && !dialog.open) {
            dialog.showModal();
        } else if (!open && dialog.open) {
            dialog.close();
        }
    }, [open]);

    return (
        <dialog
            ref={dialogRef}
            className={styles.dialog}
            onClose={onClose}
            onClick={(e) => {
                if (e.target === dialogRef.current) onClose();
            }}
        >
            <div className={styles.inner}>
                <div className={styles.toolbar}>
                    <span className={styles.title}>{title}</span>
                    <button className={styles.close} onClick={onClose} aria-label="Close preview">
                        &times;
                    </button>
                </div>
                {open && <iframe className={styles.frame} src={url} title={title ?? "Project preview"} />}
            </div>
        </dialog>
    );
}
