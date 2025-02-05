import React, { useState } from "react";
import { Container, Typography, Button, Card, CardContent, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: "YOUR_OPENAI_API_KEY", dangerouslyAllowBrowser: true });

const styles = [
    "Funny",
    "Serious",
    "Random",
    "Urgent",
    "Friendly",
    "Clickbait",
    "Inspirational",
    "Question-Based",
    "Emoji-Powered"
];

const SubjectLineGenerator: React.FC = () => {
    const [subjectLine, setSubjectLine] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedStyle, setSelectedStyle] = useState<string>(styles[0]);

    const fetchSubjectLine = async () => {
        setLoading(true);
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-4",
                messages: [{ role: "user", content: `Generate a ${selectedStyle.toLowerCase()} email subject line.` }],
            });
            setSubjectLine(response.choices[0]?.message?.content || "Failed to generate subject line.");
        } catch (error) {
            console.error("Error fetching subject line:", error);
            setSubjectLine("Error generating subject line.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
            <Typography variant="h4" gutterBottom>Random Subject Line Generator</Typography>
            <FormControl style={{ minWidth: 200, marginBottom: 20, color: "white" }}>
                <InputLabel sx={{ color: "white" }}>Select Style</InputLabel>
                <Select sx={{ color: "white" }} value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value as string)}>
                    {styles.map((style) => (
                        <MenuItem key={style} value={style}>{style}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Card style={{ margin: "20px auto", maxWidth: 500 }}>
                <CardContent>
                    <Typography variant="h5" color="primary">
                        {subjectLine || "Click the button to generate a subject line"}
                    </Typography>
                </CardContent>
            </Card>
            <Button variant="contained" color="primary" onClick={fetchSubjectLine} disabled={loading}>
                {loading ? "Generating..." : "Generate Subject Line"}
            </Button>
        </Container>
    );
};

export default SubjectLineGenerator;