import fs from 'fs'

const stream = fs.createReadStream("./complaints.json",'utf-8');

let complaints = [{}];

// let i =0;

stream.on('data', (chunk)=>{

    complaints = JSON.parse(chunk);

});

function updatedFile() {

        const newstream = fs.createWriteStream("./complaints_updated.json",[{}]);

        let complaintsJson = JSON.stringify(complaints);

        newstream.write(complaintsJson);

        complaints = JSON.parse(complaintsJson);

}

export const getComplaints = (req,res)=> {

    updatedFile();

    // res.send("---------All complaints---------\n");

    res.json(complaints);

    console.log(complaints)
    
}

export const createComplaint = (req,res)=>{

    const newComplaint = req.body;
    complaints.push(newComplaint);

    updatedFile();

    res.send("---------Complaint created---------")

    console.log('---------Complaint created---------')

}

export const resolveComplaint = (req,res)=>{
    
    const id = req.params.id;

    complaints = complaints.map(c => c.id == id ? {
        ...c,
        status: "resolved"
    } : c)

    updatedFile();

    res.send("---------Complaint resolved---------")

    console.log('---------Complaint resolved---------')
}

export const deleteComplaint = (req,res)=>{

    complaints = complaints.filter(c => c.id != req.params.id)

    updatedFile();

    res.send("---------Complaint deleted---------")

    console.log('---------Complaint deleted---------')
}

// {
//     "id": 6,
//     "title": "Signal",
//     "description": "Wi-Fi signal is pretty low in nearby rooms",
//     "status": "open"
// }