import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const {b: base,l: limit, s: showTable}=yarg

let outMessage=''
const headerMessage=`
==========================
     Tabla del ${base}
==========================\n
`

for (let i = 1; i <= limit; i++) {
    outMessage+=`${base} x ${i} = ${base*i}\n`
}
outMessage=headerMessage+outMessage

if (showTable) {
    console.log(outMessage)
}

const outputPath=`outputs`

fs.mkdirSync(outputPath,{recursive:true})
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`,outMessage)
console.log('File created')