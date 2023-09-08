const fs = require('fs/promises');
const path = require('path');

class FileSystemDAO {
  constructor() {
    this.baseDirectory = './data';
    this.ensureDataDirectory();
  }
  async ensureDataDirectory() {
    try {
      const dataDirectory = path.resolve(this.baseDirectory);

      await fs.mkdir(dataDirectory, { recursive: true });
    } catch (error) {
      throw `Error creating 'data' directory: ${error.message}`;
    }
  }
  async create(data) {
    try {
      const fileName = `${Date.now()}.json`;
      const filePath = path.join(this.baseDirectory, fileName);
      await fs.writeFile(filePath, JSON.stringify(data));
      return filePath;
    } catch (error) {
      throw `Error FileSystemDAO create: ${error.message}`;
    }
  }
  async findById(id) {
    try {
      const fileName = `${id}.json`;
      const filePath = `${this.baseDirectory}/${fileName}`;
      const data = await fs.readFile(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      throw `Error FileSystemDAO findById: ${error.message}`;
    }
  }
  async findByIdAndUpdate(id, newData) {
    try {
      const fileName = `${id}.json`;
      const filePath = `${this.baseDirectory}/${fileName}`;
      await fs.writeFile(filePath, JSON.stringify(newData));
      return filePath;
    } catch (error) {
      throw `Error FileSystemDAO findByIdAndUpdate: ${error.message}`;
    }
  }
  async findByIdAndDelete(id) {
    try {
      const fileName = `${id}.json`;
      const filePath = `${this.baseDirectory}/${fileName}`;
      await fs.unlink(filePath);
      return `${fileName} deleted successfully.`;
    } catch (error) {
      throw `Error FileSystemDAO findByIdAndDelete: ${error.message}`;
    }
  }
  async findOne(query) {
    try {
    } catch (error) {
      throw `Error FileSystemDAO findOne: ${error.message}`;
    }
  }
  async findAll(query, options) {
    try {
    } catch (error) {
      throw `Error FileSystemDAO findAll: ${error.message}`;
    }
  }
  async update(id, newData) {
    try {
    } catch (error) {
      throw `Error FileSystemDAO update: ${error.message}`;
    }
  }
  async save(data) {
    try {
      const fileName = `${Date.now()}.json`;
      const filePath = `${this.baseDirectory}/${fileName}`;
      await fs.writeFile(filePath, JSON.stringify(data));
      return filePath;
    } catch (error) {
      throw `Error FileSystemDAO save: ${error.message}`;
    }
  }
  async delete(id) {
    try {
      const fileName = `${id}.json`;
      const filePath = `${this.baseDirectory}/${fileName}`;
      await fs.unlink(filePath);
      return `${fileName} deleted successfully.`;
    } catch (error) {
      throw `Error FileSystemDAO delete: ${error.message}`;
    }
  }
  async countDocuments(query) {
    try {
      const files = await fs.readdir(this.baseDirectory);
      // Filtra los archivos que coinciden con la consulta
      const matchingFiles = files.filter((fileName) => {
        return fileName.endsWith('.json');
      });
      return matchingFiles.length;
    } catch (error) {
      throw `Error FileSystemDAO countDocuments: ${error.message}`;
    }
  }
  async paginate(query, options) {
    try {
    } catch (error) {
      throw `Error FileSystemDAO paginate: ${error.message}`;
    }
  }
}
module.exports = FileSystemDAO;
