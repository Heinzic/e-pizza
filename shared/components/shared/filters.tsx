import { cn } from "cn"
import { Title } from "./title"
import { FilterCheckbox } from "./filter-checkbox"
import { Input } from "../ui"
import { RangeSlider } from "."

interface Props {
    className?: string
}

export const Filters = ({ className }: Props) => {
    return (
        <div className={cn('', className)}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
            <div className="flex flex-col gap-4">
                <FilterCheckbox text='Можно собирать' value='1' />
                <FilterCheckbox text='Новинки' value='2' />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="flex gap-3 mb-5">Цена от и до</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
                    <Input type="number" placeholder="1000" min={100} max={1000} />
                </div>

                <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
            </div>
        </div>
    )
}
