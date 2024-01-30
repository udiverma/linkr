import { memo } from "react";
import { NodeResizer } from "reactflow";
import NodeWrapper from "../NodeWrapper/NodeWrapper";

const PinterestNode = memo(({ selected, data }) => {
  return (
    <>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={200}
        minHeight={200}
      />
      <NodeWrapper>
        <iframe
          src={`https://assets.pinterest.com/ext/embed.html?id=${data.id}`}
          height="100%"
          width="100%"
          frameBorder="0"></iframe>
      </NodeWrapper>
    </>
  );
});

export default PinterestNode;
