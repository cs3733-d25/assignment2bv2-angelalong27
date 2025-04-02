import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

export function FillForm2() {
    return (
        <form className="space-y-2 border-2 border-gray-500 rounded-lg p-4 text-sm">
            <div className="flex items-center space-x-2">
                <Checkbox id="chinese"/>
                <p className="text-sm">Chinese</p>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="italian"/>
                <p className="text-sm">Italian</p>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="japanese"/>
                <p className="text-sm">Japanese</p>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="mexican"/>
                <p className="text-sm">Mexican</p>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="indian"/>
                <p className="text-sm">Indian</p>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="thai"/>
                <p className="text-sm">Thai</p>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="french"/>
                <p className="text-sm">French</p>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="other"/>
                <p className="text-sm">Other:</p>
                <Input id="other" placeholder="Type in your favorite cuisines that is not listed"/>
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-sm">Favorite Dishes or Meals:</p>
                <Textarea id="favorite" rows={2} placeholder="Type in favorite dishes or meals"/>
            </div>
            <div className="text-right">
                <Button className="gray-500">Submit</Button>
            </div>
        </form>
    )
}