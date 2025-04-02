import {useState} from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function FillForm(){
    const [text, setText] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // prevents default behavior aka refresh
        setText(""); // clears input field
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input type="name" placeholder="Name" />
            <br/>
            <Input type="email" placeholder="Email" />
            <br/>
            <Label htmlFor="Year">Year</Label>
            <br/>
            <RadioGroup>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="freshman" id="freshman" />
                    <Label htmlFor="freshman">Freshman</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sophomore" id="sophomore" />
                    <Label htmlFor="sophomore">Sophomore</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="junior" id="junior" />
                    <Label htmlFor="junior">Junior</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="senior" id="senior" />
                    <Label htmlFor="senior">Senior</Label>
                </div>
            </RadioGroup>
            <br/>
            <div className="flex items-center space-x-2">
                <p className="text-lg">Ballet</p>
                <Checkbox id="ballet" />
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-lg">Jazz</p>
                <Checkbox id="jazz" />
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-lg">Hip Hop</p>
                <Checkbox id="hiphop" />
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-lg">Classical</p>
                <Checkbox id="classical" />
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-lg">Other</p>
                <Checkbox id="other" />
            </div>
            <br/>
            <Select>
                <SelectTrigger className="w-[180px] bg-white text-black">
                    <SelectValue placeholder="Reason for Reaching Out" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="talking">Talking</SelectItem>
                    <SelectItem value="dancing">Dancing</SelectItem>
                    <SelectItem value="choreographing">Choreographing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                </SelectContent>
            </Select>
            <br/>
            <Textarea placeholder="Additional Comments?" />
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}