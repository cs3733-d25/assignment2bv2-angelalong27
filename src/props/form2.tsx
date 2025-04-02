import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export function FillForm2() {
    return (
        <form className="flex items-center space-x-2">
            <h2>Your Favorite Foods</h2>
            <p>I'm always open in trying new recipes.
                What are some of your favorite cuisines, dishes, and meals?</p>
            <div className="flex items-center space-x-2">
                <p className="text-lg">Chinese</p>
                <Checkbox id="chinese"/>
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-lg">Italian</p>
                <Checkbox id="italian"/>
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-lg">Japanese</p>
                <Checkbox id="japanese"/>
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-lg">Mexican</p>
                <Checkbox id="mexican"/>
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-lg">Indian</p>
                <Checkbox id="indian"/>
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-lg">Thai</p>
                <Checkbox id="thai"/>
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-lg">French</p>
                <Checkbox id="french"/>
            </div>
            <div className="flex items-center space-x-2">
                <Label htmlFor="other">Other:</Label>
                <Input id="other" placeholder="Type a different cuisine that is not listed"/>
            </div>
            <div className="flex items-center space-x-2">
                <Label htmlFor="favorite">Favorite Dishes or Meals:</Label>
                <Textarea id="favorite" rows={2} placeholder="Write your favorite dishes or meals"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}