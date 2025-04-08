import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, CircularProgress, Alert
} from "@mui/material";
import ContentLayout from "../components/ContentLayout.tsx";
import {JSX} from "react";
import { useQuery } from "@tanstack/react-query";
import { Counter, getCounters } from "../api/counterApi";

export default function Counters(): JSX.Element {
    const { data, isLoading, isError, error } = useQuery<Counter[], Error>({
        queryKey: ["counters"],
        queryFn: getCounters,
    });

    return (
        <ContentLayout title="Counters">
            {isLoading && <CircularProgress />}
            {isError && <Alert severity="error">{error.message}</Alert>}
            {!isLoading && !isError && (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Count</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data!.map((row) => (
                                <TableRow key={row.counterId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{row.counterId}</TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.count}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </ContentLayout>
    );
}