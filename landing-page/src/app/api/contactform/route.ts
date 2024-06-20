import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req) {
    const body = await req.json();
    
    try {
        const response = await axios.post('http://localhost:8000/api/contactform/', body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = response.data;
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        if (error.response) {
            return NextResponse.json(error.response.data, { status: error.response.status });
        } else {
            return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
        }
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
};