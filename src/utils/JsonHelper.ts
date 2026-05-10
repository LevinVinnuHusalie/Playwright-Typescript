import fs from "fs";
import path from "path";
import { TestData } from "../interfaces/TestDataInterface";

export async function loadTestData() {
    const environment = process.env.ENVIRONMENT || 'qa';
    const directoryPath = path.join(__dirname, "../../test-data", environment);

    const jsonData: TestData = {};
    fs.readdirSync(directoryPath).forEach(file => {
        if (file.endsWith('.json')) { 
            const filePath = path.join(directoryPath, file);
            const fileContent: TestData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            Object.assign(jsonData, fileContent);
        }
    });

    return jsonData;
}