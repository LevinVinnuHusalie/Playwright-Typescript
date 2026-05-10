//Import excel
import * as EXCEL from 'xlsx';
import fs from 'fs';

// Define test data structure
interface TestRecord {
  Skill1: string,
  Skill2: string;
}

// Create method to read excel file
export function readExcelFile(filePath: string) {

    const file = fs.readFileSync(filePath);

    const workbook = EXCEL.read(file);

    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const rawData: any[] = EXCEL.utils.sheet_to_json(sheet, { header: 1 }); 

    const record: TestRecord[] = rawData.slice(1).map((column: any) => ({
        Skill1: column[0],
        Skill2: column[1],
    }));

    return record;
}
