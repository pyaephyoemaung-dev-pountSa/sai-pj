import { ScrollArea } from "#/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "#/components/ui/tabs"
import { useCategoriesQuery } from "#/services/categories/queries"

type Props = {
  tab: string,
  handleCategory:(e:string) => void
}
export const Categories = ({tab,handleCategory}:Props) =>
{
  const { data } = useCategoriesQuery()
  
  return (
    <div>
      <ScrollArea className="max-w-6xl mx-auto mt-8 rounded-full">
        <Tabs
          value={tab}
          onValueChange={handleCategory}
        >
          <TabsList>
            <TabsTrigger value={'all'}>all</TabsTrigger>
            {data?.map((c) => (
              <TabsTrigger key={c} value={c}>
                {c}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </ScrollArea>
    </div>
  )
}