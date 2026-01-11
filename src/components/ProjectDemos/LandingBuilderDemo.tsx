import { useState } from 'react';
import { Reorder } from 'framer-motion';
import './DemoStyles.css';

interface Block {
  id: string;
  type: 'hero' | 'cta' | 'text';
  content: string;
}

const initialBlocks: Block[] = [
  { id: '1', type: 'hero', content: 'Your Amazing Product' },
  { id: '2', type: 'text', content: 'Transform your business with our innovative solution.' },
  { id: '3', type: 'cta', content: 'Get Started Now' },
];

export function LandingBuilderDemo() {
  const [blocks, setBlocks] = useState(initialBlocks);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

  const addBlock = (type: 'hero' | 'cta' | 'text') => {
    const newBlock: Block = {
      id: Date.now().toString(),
      type,
      content: type === 'hero' ? 'New Heading' : type === 'cta' ? 'Button Text' : 'New paragraph text',
    };
    setBlocks([...blocks, newBlock]);
  };

  const updateBlock = (id: string, content: string) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, content } : block
    ));
  };

  const deleteBlock = (id: string) => {
    setBlocks(blocks.filter(block => block.id !== id));
    if (selectedBlock === id) setSelectedBlock(null);
  };

  return (
    <div className="demo-container landing-builder-demo">
      <div className="demo-header">
        <h3>🎨 Landing Page Builder - Interactive Demo</h3>
        <p>Drag, drop, and edit to create beautiful landing pages</p>
      </div>

      <div className="builder-layout">
        <div className="builder-sidebar glass">
          <h4>Add Blocks</h4>
          <div className="block-options">
            <button className="block-option" onClick={() => addBlock('hero')}>
              <span className="block-icon">H</span>
              Heading
            </button>
            <button className="block-option" onClick={() => addBlock('text')}>
              <span className="block-icon">T</span>
              Text
            </button>
            <button className="block-option" onClick={() => addBlock('cta')}>
              <span className="block-icon">B</span>
              Button
            </button>
          </div>
        </div>

        <div className="builder-canvas">
          <div className="canvas-header">
            <h4>🖥️ Live Preview</h4>
          </div>
          
          <Reorder.Group
            axis="y"
            values={blocks}
            onReorder={setBlocks}
            className="canvas-blocks"
          >
            {blocks.map((block) => (
              <Reorder.Item
                key={block.id}
                value={block}
                className={`canvas-block ${selectedBlock === block.id ? 'selected' : ''}`}
                onClick={() => setSelectedBlock(block.id)}
                whileDrag={{ scale: 1.02, boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}
              >
                <div className="block-drag-handle">⋮⋮</div>
                
                {block.type === 'hero' && (
                  <input
                    type="text"
                    className="editable-heading"
                    value={block.content}
                    onChange={(e) => updateBlock(block.id, e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
                
                {block.type === 'text' && (
                  <textarea
                    className="editable-text"
                    value={block.content}
                    onChange={(e) => updateBlock(block.id, e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
                
                {block.type === 'cta' && (
                  <input
                    type="text"
                    className="editable-button"
                    value={block.content}
                    onChange={(e) => updateBlock(block.id, e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                )}

                <button
                  className="block-delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteBlock(block.id);
                  }}
                >
                  ×
                </button>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
}
