import React from 'react'
import Skeleton from './Skeleton'
import EmptyList from './EmptyList'
import ResourceDataMap from './ResourceDataMap'

interface IgridList {
    isLoading: Boolean,
    resourceItem: React.FC,
    resourceName: String,
    resourceData: (string | object | number)[],
    skeleton: React.ElementType,
    emptyComponent: React.ElementType
}

const GridList = ({
    isLoading,
    resourceItem: ResourceItem,
    resourceName,
    resourceData = [],
    skeleton: LoadingSkeleton = Skeleton,
    emptyComponent: EmptyComponent = EmptyList
}: IgridList) => {
    const container: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))',
        gap: '15px',
        overflowY: 'auto'
    }
    return (
        <>
            {
                isLoading ?
                    <div style={container}>
                        {
                            [1, 2, 3, 4, 5, 6].map(item => <LoadingSkeleton key={item} />)
                        }
                    </div>
                    :
                    resourceData.length ?
                        <div style={container}>
                            <ResourceDataMap
                                resourceData={resourceData}
                                resourceItem={ResourceItem}
                                resourceName={`${resourceName}`}
                            />
                        </div> :
                        <EmptyComponent />
            }
        </>
    )
}


export default GridList