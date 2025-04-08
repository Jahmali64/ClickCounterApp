import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material";
import ContentLayout from "../components/ContentLayout.tsx";
import {JSX} from "react";

type Counter = {
    counterId: number,
    name: string,
    count: number,
};

const rows: Counter[] = [
    {counterId: 1, name: "Push Ups", count: 4},
    {counterId: 2, name: "React Apps", count: 3},
];

export default function Counters(): JSX.Element {
    return (
        <ContentLayout title="Counters">
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Count</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row: Counter): JSX.Element => (
                            <TableRow key={row.counterId} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell component="th" scope="row"> {row.counterId}</TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ContentLayout>
    );
}