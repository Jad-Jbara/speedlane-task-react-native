import React, { PropsWithChildren } from 'react'
import ContentLoader, { Circle, IContentLoaderProps, Rect } from 'react-content-loader/native'

import DimensionHelper from 'Helpers/DimensionHelper'
import Colors from 'Theme/Colors'

const containerWidth = DimensionHelper.getWidth(375)
const containerHeight = DimensionHelper.getHeight(113)


const Loader: React.FC<PropsWithChildren<IContentLoaderProps>> = ({
  children,
  width = containerWidth,
  height = containerHeight,
  ...props
}) => {
  const firstBoxPosition = DimensionHelper.getWidth(313)
  const secondBoxPosition = DimensionHelper.getWidth(102)
  const commonRectProps = {
    rx: '3',
    ry: '3',
    height: '6',
  }
  return (
    <ContentLoader
      testID='loader'
      speed={2}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      // backgroundColor={Colors.contentLoaderBackground}
      // foregroundColor={Colors.cotentLoaderForeground}
      {...props}>
      {children || (
        <>
          <Rect x={firstBoxPosition} y={DimensionHelper.getHeight(72)} width={DimensionHelper.getHeight(66)} {...commonRectProps} />
          <Rect x={firstBoxPosition} y={DimensionHelper.getHeight(46)} width={DimensionHelper.getHeight(66)} {...commonRectProps} />
          <Rect x={firstBoxPosition} y={DimensionHelper.getHeight(20)} width={DimensionHelper.getHeight(66)} {...commonRectProps} />
          <Rect x={secondBoxPosition} y={DimensionHelper.getHeight(20)} width={DimensionHelper.getWidth(70)} {...commonRectProps} />
          <Rect x={secondBoxPosition} y={DimensionHelper.getHeight(46)} width={DimensionHelper.getWidth(120)} {...commonRectProps} />
          <Rect x={secondBoxPosition} y={DimensionHelper.getHeight(72)} width={DimensionHelper.getWidth(50)} {...commonRectProps} />
          <Rect x='0' y={DimensionHelper.getHeight(112)} rx='0' ry='0' width={DimensionHelper.getWidth(375)} height='2' />
          <Circle cx={DimensionHelper.getWidth(51.5)} cy={DimensionHelper.getHeight(55.5)} r={DimensionHelper.getWidth(33.5)} />
        </>
      )}
    </ContentLoader>
  )
}

export default Loader
