import { Button } from '@/components/ui/Button'
import { Loader } from '@/components/ui/Loader'

export default function Uitest() {
    return (
        <div className='w-full h-screen m-auto'>
            <Buttons />
            <Loaders />
        </div>
    )
}


function Buttons() {
    return (
        <div className="flex items-center justify-center flex-row gap-2 border border-primary p-4 h-5 bg-gray-400">
            <Button variant="primary" size="md">
                Primary
            </Button>
            <Button variant="secondary" size="md">
                Secondary
            </Button>
            <Button variant="outline" size="md">
                Outline
            </Button>
            <Button variant="danger" size="md">
                Danger
            </Button>
            <Button size="md" variant="danger" loading={true}>
                Loading
            </Button>
        </div>
    )
}

function Loaders() {
    return (
        <div className='flex flex-row items-center justify-center gap-10 border border-accent'>
            <Loader size="sm" color="primary" />
            <Loader size="md" color="secondary" />
            <Loader size="lg" color="danger" />
        </div>
    )
}

