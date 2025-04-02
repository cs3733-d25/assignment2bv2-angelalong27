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
import { Button } from "@/components/ui/button"

export function FillForm(){
    const [text, setText] = useState(""); // Doesnt work yet but button doesn't need to work?

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // prevents default behavior aka refresh
        setText(""); // clears input field
    }
    return (
        <form onSubmit={handleSubmit} className="p-4 border border-gray-400 bg-white">
            <p className="text-2xl font-bold mb-2"> Contact Aditri </p>
            <br/>
            <Label htmlFor="Contact" className="text-lg font-bold mb-2">Your Contact Info</Label>
            <Input type="name" placeholder="Name" className="mb-2"/>
            <Input type="email" placeholder="Email" />
            <br/>
            <Label htmlFor="Year" className="text-lg font-bold mb-2">Year</Label>
            <RadioGroup>
                <div className="flex items-center space-x-2 text-sm">
                    <RadioGroupItem value="freshman" id="freshman" />
                    <Label htmlFor="freshman">Freshman</Label>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                    <RadioGroupItem value="sophomore" id="sophomore" />
                    <Label htmlFor="sophomore">Sophomore</Label>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                    <RadioGroupItem value="junior" id="junior" />
                    <Label htmlFor="junior">Junior</Label>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                    <RadioGroupItem value="senior" id="senior" />
                    <Label htmlFor="senior">Senior</Label>
                </div>
            </RadioGroup>
            <br/>
            <Label htmlFor="Fav" className="text-lg font-bold mb-2 ">Favorite Dance Form</Label>
            <div className="flex items-center space-x-2">
                <Checkbox id="ballet" />
                <p className="text-sm">Ballet</p>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="jazz" />
                <p className="text-sm">Jazz</p>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="hiphop" />
                <p className="text-sm">Hip Hop</p>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="classical" />
                <p className="text-sm">Classical</p>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="other" />
                <p className="text-sm">Other</p>
            </div>
            <br/>
            <Label htmlFor="Additional" className="text-lg font-bold mb-2">Additional</Label>
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
            <Button className="bg-sky-200">Submit</Button>
        </form>
    )
}