import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const new_directory_path = path.join(dirname, "folder_1");

const createDirectory = async () => {
  try {
    await fs.mkdir(new_directory_path);
    await fs.mkdir("folder_2");
  } catch (err) {
    console.error(err);
  }
};
createDirectory();

const filename2 = fileURLToPath(import.meta.url);
const dirname2 = path.dirname(filename2);

const new_directory_path_2 = path.join(dirname2, "folder_2");

const createDirectory2 = async () => {
  try {
    await fs.mkdir(new_directory_path_2, { recursive: true });
  } catch (err) {
    console.error(err);
  }
};
createDirectory2();

const filename3 = fileURLToPath(import.meta.url);
const dirname3 = path.dirname(filename3);

const log_full_path = path.join(dirname3, "folder_1", "note.txt");

const writeFile = async () => {
  try {
    await fs.writeFile(log_full_path, "Hi from NodeJS");
  } catch (err) {
    console.error(err);
  }
};
writeFile();

const filename4 = fileURLToPath(import.meta.url);
const dirname4 = path.dirname(filename4);

const old_log_full_path = path.join(dirname4, "folder_1", "note.txt");

const new_log_full_path = path.join(dirname4, "folder_1", "my_notes.txt");

const renameFile = async () => {
  try {
    await fs.rename(old_log_full_path, new_log_full_path);
  } catch (err) {
    console.error(err);
  }
};
renameFile();

const filename5 = fileURLToPath(import.meta.url);
const dirname5 = path.dirname(filename5);

const old_directory_path = path.join(dirname5, "folder_1", "my_notes.txt");
const new_directory_path_5 = path.join(dirname5, "folder_2", "my_notes.txt");

const moveFile = async () => {
  try {
    await fs.rename(old_directory_path, new_directory_path_5);
  } catch (error) {
    console.error(error);
  }
};
moveFile();

const filename6 = fileURLToPath(import.meta.url);
const dirname6 = path.dirname(filename6);

const old_directory_path_6 = path.join(dirname6, "folder_1");
const new_directory_path_6 = path.join(dirname6, "folder_2");

const moveFolder = async () => {
  try {
    await fs.rename(old_directory_path_6, new_directory_path_6);
  } catch (error) {
    console.error(error);
  }
};
moveFolder();

const filename7 = fileURLToPath(import.meta.url);
const dirname7 = path.dirname(filename7);

const old_directory_path_7 = path.join(dirname7, "folder_2");
const new_directory_path_7 = path.join(dirname7, "folder_1");

const moveDirectory = async () => {
  try {
    await fs.rename(old_directory_path_7, new_directory_path_7);
  } catch (error) {
    console.error(error);
  }
};
moveDirectory();

const filename8 = fileURLToPath(import.meta.url);
const dirname8 = path.dirname(filename8);

const deleteDirectory = async () => {
  try {
    await fs.rmdir(path.join(dirname8, "folder_2"), {
      recursive: true,
      force: true,
    });
  } catch (error) {
    console.error(error);
  }
};
deleteDirectory();

const filename9 = fileURLToPath(import.meta.url);
const dirname9 = path.dirname(filename9);

const log_full_path_9 = path.join(dirname9, "folder_1", "my_notes.txt");

const deleteFile = async () => {
  try {
    await fs.unlink(log_full_path_9);
  } catch (error) {
    console.error(error.message);
  }
};
deleteFile();

const filename10 = fileURLToPath(import.meta.url);
const dirname10 = path.dirname(filename10);

const deleteDirectory1 = async () => {
  try {
    await fs.rmdir(path.join(dirname10, "folder_1"), {
      recursive: true,
      force: true,
    });
  } catch (error) {
    console.error(error);
  }
};
deleteDirectory1();
