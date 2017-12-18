import { expect } from 'chai';
import Node from '../scripts/Node'

describe('NODE', () => {
  let node;

  beforeEach(() => {
    node = new Node('pizza')
  })

  it.skip('should be a thing', () => {
    expect(node).to.exist
  })

  it.skip('should default next to null', () => {
    expect(node.next).to.equal(null);
  })

  it.skip('should take data and assign it to data prop', () => {
    expect(node.data).to.equal('pizza')
  })

})
