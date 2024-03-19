"use client";
/** react */
import { FC, useState, ChangeEvent, DragEvent } from "react";

/** style */
import styles from "./styles.module.scss";
import { UploadSimple } from "@phosphor-icons/react";

interface Props {}

const UploadCard: FC<Props> = ({}: Props) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
    }
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.uploadContainer}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
          <UploadSimple size={32} color="var(--primary)"/>
          <p>Arraste e solte ou</p>
        <label htmlFor="fileInput" className={styles.uploadLabel}>
          <input
            type="file"
            id="fileInput"
            onChange={handleFileSelect}
            className={styles.fileInput}
          />
          Selecionar arquivo
        </label>
        <p>Tamanho máximo do arquivo: 50MB, mínimo de linhas: 2</p>
        <div className={styles.selectedFiles}>
          {selectedFiles.map((file, index) => (
            <div key={index} className={styles.fileItem}>
              {file.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadCard;
